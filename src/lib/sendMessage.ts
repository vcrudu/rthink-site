"use client";

import { TContactUsSchema } from './zodTypes';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export async function sendMessage(contactUsForm: TContactUsSchema) {
  await fetch('/api/mail', {
    method: 'POST',
    body: JSON.stringify(contactUsForm),
  })
}
