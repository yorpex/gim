import { cn } from "@/lib/utils";

function Gim(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-8 text-foreground", props.className)}
      {...props}
    >
      <path
        d="M27.934 12.012c3.526.206 6.766 1.018 9.403 3.493 2.078 1.952 3.142 4.445 3.711 7.207.66 3.204.35 6.447.419 9.675.016.738.038 1.479-.009 2.214-.041.645.154.895.82.859 1.333-.072 2.655.004 3.953.402 3.136.962 5.24 3.54 5.643 6.858.13 1.071.088 2.135.125 3.203.016.454-.147.644-.606.634a60.154 60.154 0 00-2.946.002c-.513.014-.651-.226-.621-.69a9.06 9.06 0 00-.17-2.344c-.412-2.087-1.942-3.298-4.256-3.399-1.93-.084-1.931-.084-1.932 1.844 0 3.048-.018 6.095.015 9.143.008.687-.19.913-.87.885a49.443 49.443 0 00-3.646-.004c-.611.02-.806-.182-.8-.813.026-3.38-.006-6.762.027-10.142.007-.718-.192-.94-.909-.934-3.624.034-7.254-.116-10.872.046-5.047.225-10.874-4.17-11.936-9.699-.619-3.219-.748-6.434.297-9.58 1.564-4.702 4.877-7.405 9.587-8.439 1.817-.398 3.656-.466 5.573-.42zm3.508 5.27c-2.204-.932-4.506-1.026-6.823-.719-3.354.445-5.611 2.32-6.677 5.61-.71 2.19-.752 4.434-.41 6.696.194 1.28.532 2.503 1.334 3.556 1.62 2.125 3.818 2.99 6.375 3.013 3.39.032 6.782-.006 10.173.022.645.005.783-.252.776-.846-.026-2.237 0-4.476-.015-6.714-.01-1.5-.136-2.993-.43-4.463-.53-2.654-1.613-4.923-4.303-6.155z"
        fill="currentColor"
      />
    </svg>
  );
}

export { Gim, Gim as GimIcon };