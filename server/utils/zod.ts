import * as z from 'zod'

const errorMap = (issues: z.core.$ZodIssue[]) =>
  issues.map(issue => ({
    message: issue.message,
    name: issue.path.join('.'),
  }))

export { z, errorMap }
