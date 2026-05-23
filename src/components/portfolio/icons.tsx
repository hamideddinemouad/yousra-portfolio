type IconProps = {
  className?: string;
};

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 6.75c0 7.041 5.709 12.75 12.75 12.75h1.125a2.625 2.625 0 0 0 2.625-2.625v-.718a1.875 1.875 0 0 0-1.28-1.778l-2.636-.879a1.875 1.875 0 0 0-2.196.79l-.578.866a15.061 15.061 0 0 1-5.47-5.47l.866-.578a1.875 1.875 0 0 0 .79-2.196L9.62 4.905a1.875 1.875 0 0 0-1.778-1.28h-.717A2.625 2.625 0 0 0 4.5 6.25v.5Z"
      />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 7.5v9A2.25 2.25 0 0 1 19.5 18.75h-15A2.25 2.25 0 0 1 2.25 16.5v-9m19.5 0A2.25 2.25 0 0 0 19.5 5.25h-15A2.25 2.25 0 0 0 2.25 7.5m19.5 0v.243a2.25 2.25 0 0 1-.987 1.856l-7.5 5a2.25 2.25 0 0 1-2.526 0l-7.5-5A2.25 2.25 0 0 1 2.25 7.743V7.5"
      />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

export function ArrowDownTrayIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v.75A2.25 2.25 0 0 0 5.25 19.5h13.5A2.25 2.25 0 0 0 21 17.25v-.75"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 10.5 12 15m0 0 4.5-4.5M12 15V3"
      />
    </svg>
  );
}
