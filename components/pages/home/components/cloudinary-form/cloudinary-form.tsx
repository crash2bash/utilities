'use client';

import { zodResolver } from '@hookform/resolvers/zod';
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
                  <Input placeholder="Cloudinary link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {!!cloudinaryUrl && (
        <div>
          <div className="flex flex-col gap-4">
            <span>Optimized URL:</span>
            <a className="text-blue-500 underline" href={cloudinaryUrl} rel="noopener noreferrer" target="_blank">
              {cloudinaryUrl}
            </a>
          </div>
          <div className="bg-amber-50 p-4">
            <img src={cloudinaryUrl} alt="Optimized" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudinaryForm;
