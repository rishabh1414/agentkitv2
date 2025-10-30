import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Optimize our checkout process",
    prompt: "Help me optimize our checkout process to reduce cart abandonment",
    icon: "circle-question",
  },
  {
    label: "Create LinkedIn content calendar",
    prompt:
      "Create a 30-day LinkedIn content calendar for our B2B SaaS company",
    icon: "circle-question",
  },
  {
    label: "Set up automated invoicing",
    prompt: "Set up an automated invoicing system for recurring customers",
    icon: "circle-question",
  },
  {
    label: "Design customer onboarding flow",
    prompt: "Design a customer onboarding workflow for our new product",
    icon: "circle-question",
  },
  {
    label: "Integrate Stripe payments",
    prompt: "Help me integrate Stripe payment processing into our application",
    icon: "circle-question",
  },
  {
    label: "Plan Q2 product launch",
    prompt:
      "Create a complete project plan for our Q2 product launch with timeline and milestones",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "How can I help you today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
