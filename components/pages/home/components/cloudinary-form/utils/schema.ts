import { z } from 'zod';

import { ECloudinaryFormField } from '../types';

export const schema = z.object({
  [ECloudinaryFormField.LINK]: z.string().url(),
});
