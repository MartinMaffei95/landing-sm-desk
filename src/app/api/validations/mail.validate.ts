import { ContactData } from '@/interfaces';
import { z } from 'zod';
import { toZod } from 'tozod';
export const validateContactRequest = () => {
  const contactSchema: toZod<ContactData> = z.object({
    company: z.string(),
    country: z.string().nonempty('Este campo no puede estar vacío'),
    firstName: z.string().nonempty('Este campo no puede estar vacío'),
    mail: z
      .string()
      .nonempty('Este campo no puede estar vacío')
      .email('Instroduzca un mail valido'),
    message: z.string().nonempty('Este campo no puede estar vacío'),
    phone: z
      .string()
      .nonempty('Este campo no puede estar vacío')
      .min(4, 'Introduzca un teléfono valido'),
    secondName: z.string().nonempty('Este campo no puede estar vacío'),
  });
  return contactSchema;
};
