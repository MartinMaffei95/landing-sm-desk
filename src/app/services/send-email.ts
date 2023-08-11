import { sendSnackbar } from '@/app/services/snackbar-manager.service';
import { ContactData } from '@/interfaces';

export const sendEmail = async (contactData: ContactData) => {
  try {
    const res = await fetch('http://localhost:3000/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    const data = res;
    if (data.status > 299) throw new Error();

    return data;
  } catch (error) {
    throw error;
  }
};
