export type Inquiry = {
  name: string
  email: string
  organization: string
  topic: string
  purpose: string
  message: string
  language: string
  website: string
}

// A 2xx response alone does not prove that an inquiry was accepted.
export async function sendInquiry(endpoint: string, inquiry: Inquiry, signal?: AbortSignal) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inquiry),
    signal,
  })
  const result: unknown = await response.json()
  if (
    !response.ok ||
    !result ||
    typeof result !== 'object' ||
    !('ok' in result) ||
    result.ok !== true
  ) {
    throw new Error('The contact service did not accept the inquiry')
  }
}
