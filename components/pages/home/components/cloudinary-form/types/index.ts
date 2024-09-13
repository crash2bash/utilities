import { z } from 'zod';

import { schema } from '../utils/schema';

export enum ECloudinaryFormField {
  LINK = 'link',
}

export type TCloudinaryForm = z.infer<typeof schema>;
