'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CopyIcon, Cross1Icon } from '@radix-ui/react-icons';
import { FC, ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { ECloudinaryFormField, TCloudinaryForm } from './types';
import { schema } from './utils/schema';

const CloudinaryForm: FC = () => {
  const [cloudinaryUrl, setCloudinaryUrl] = useState<string>('');

  const methods = useForm<TCloudinaryForm>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
    defaultValues: {
      [ECloudinaryFormField.LINK]: '',
    },
  });

  const handleSubmit = methods.handleSubmit((data) => {
    const url = decodeURIComponent(data[ECloudinaryFormField.LINK]);
    const updatedUrl = url.replace(/(\/upload\/)([^/]+)/, '$1f_auto/q_auto/$2');

    setCloudinaryUrl(updatedUrl);
  });

  const clearInput = (): void => {
    methods.resetField(ECloudinaryFormField.LINK);
  };

  const copyLinkToClipboard = (url: string): void => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex flex-col gap-4">
      <Form {...methods}>
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormField
            control={methods.control}
            name={ECloudinaryFormField.LINK}
            render={({ field }): ReactElement => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="Cloudinary link" className="pr-10" {...field} />
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-0 top-0 border-0"
                      onClick={clearInput}
                    >
                      <Cross1Icon />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <span>Optimized URL:</span>
          {!!cloudinaryUrl && (
            <div className="flex gap-4 items-center">
              <Button asChild variant="link" className="text-neutral-400 p-0 block h-fit">
                <a className="truncate w-[90%] " href={cloudinaryUrl} rel="noopener noreferrer" target="_blank">
                  {cloudinaryUrl}
                </a>
              </Button>
              <Button variant="outline" size="icon" onClick={(): void => copyLinkToClipboard(cloudinaryUrl)}>
                <CopyIcon />
              </Button>
            </div>
          )}
        </div>
        <div className="bg-amber-50 p-4 rounded-xl h-[40dvh]">
          {!!cloudinaryUrl && <img src={cloudinaryUrl} alt="Optimized" />}
          {!cloudinaryUrl && <span className="text-black">Optimized image will be displayed here</span>}
        </div>
      </div>
    </div>
  );
};

export default CloudinaryForm;
