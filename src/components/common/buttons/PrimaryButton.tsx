// 'use client';

// import { cva, type VariantProps } from 'class-variance-authority';
// import { cn } from '@/lib/utils';
// import Link from 'next/link';

// const buttonVariants = cva(
//   'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3449FF] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
//   {
//     variants: {
//       variant: {
//         default: 'bg-[#3449FF] text-white hover:bg-[#3449FF]/90',
//         outline: 'border border-[#3449FF] text-[#3449FF] hover:bg-[#3449FF]/10',
//         ghost: 'text-[#3449FF] hover:bg-[#3449FF]/10',
//       },
//       size: {
//         default: 'h-12 px-4 py-2',
//         sm: 'h-9 px-3',
//         lg: 'h-14 px-8',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'default',
//     },
//   }
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   href?: string;
// }

// export function PrimaryButton({
//   className,
//   variant,
//   size,
//   href,
//   children,
//   ...props
// }: ButtonProps) {
//   const Comp = href ? Link : 'button';
  
//   return (
//     <Comp
//       className={cn(buttonVariants({ variant, size, className }))}
//       href={href ?? "#"}
//       {...props}
//     >
//       {children}
//     </Comp>
//   );
// } 

'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3449FF] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-[#3449FF] text-white hover:bg-[#3449FF]/90',
        outline: 'border border-[#3449FF] text-[#3449FF] hover:bg-[#3449FF]/10',
        ghost: 'text-[#3449FF] hover:bg-[#3449FF]/10',
      },
      size: {
        default: 'h-12 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-14 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export function PrimaryButton({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

