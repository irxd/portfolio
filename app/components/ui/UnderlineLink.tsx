'use client'

import Link from 'next/link'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  className?: string
} & ComponentProps<'a'>

export default function UnderlineLink({
  href,
  onClick,
  className,
  children,
  ...props
}: Props) {
  const baseStyle =
    "relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:block after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition after:duration-300 after:content-[''] hover:after:scale-x-100"

  if (href) {
    return (
      <Link href={href} className={twMerge(baseStyle, className)} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a className={twMerge(baseStyle, className)} onClick={onClick} {...props}>
      {children}
    </a>
  )
}
