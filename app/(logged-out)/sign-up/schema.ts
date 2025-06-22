import z from "zod";

const accountTypeSchema = z.object({
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(),
  }).superRefine((data, ctx) => {
    if (data.accountType === "company" && !data.companyName) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["companyName"], message: "Company name is required" });
    }
    if (data.accountType === "company" && (!data.numberOfEmployees || data.numberOfEmployees < 1)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["numberOfEmployees"], message: "Number of employees must be greater than 0" });
    }
  });
  
  const baseSchema = z.object({
    email: z.string().email(),
    dob: z.date().refine((date) => {
      const today = new Date();
      const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
      return date < eighteenYearsAgo;
    }, {
      message: "You must be at least 18 years old",
    }),
    acceptTerms: z.boolean({
        required_error: "You must accept the terms and conditions",
    }).refine((value) => value === true, {
        message: "You must accept the terms and conditions",
    }),
  });
  
  const passwordSchema = z.object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }).refine((password) => {
      // must contain at least 1 special character and 1 uppercase character
      return /^(?=,*[!@#$%^&*]) (?=,*[A-Z]).*$/.test(password);
    }, "Password must contain at least 1 special character and 1 uppercase character"),
    confirmPassword: z.string(),
  }).superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["confirmPassword"], message: "Passwords do not match" });
    }
  });
  
  export const formSchema = baseSchema.and(accountTypeSchema).and(passwordSchema);