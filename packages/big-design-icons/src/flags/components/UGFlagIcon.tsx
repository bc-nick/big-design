// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo, useId } from 'react';

import { PrivateIconProps } from '../../base';
import { createStyledFlagIcon, FlagIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'UG flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useId();
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg
      aria-hidden={ariaHidden}
      aria-labelledby={titleId}
      ref={svgRef}
      viewBox="0 0 640 480"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <clipPath id="UGFlagIcon__a">
          <path d="M-85.3 0h682.6v512H-85.3z" fillOpacity={0.7} />
        </clipPath>
      </defs>
      <g clipPath="url(#UGFlagIcon__a)" transform="translate(80) scale(.9375)">
        <path d="M-128 341.4h768v85.3h-768z" fill="#ffe700" fillRule="evenodd" />
        <path d="M-128 256h768v85.3h-768z" fillRule="evenodd" />
        <path d="M-128 170.7h768V256h-768z" fill="#de3908" fillRule="evenodd" />
        <path d="M-128 85.4h768v85.3h-768z" fill="#ffe700" fillRule="evenodd" />
        <path d="M-128 0h768v85.3h-768z" fillRule="evenodd" />
        <path
          d="M335.7 256a79.7 79.7 0 11-159.4 0 79.7 79.7 0 01159.4 0z"
          fill="#fffdff"
          fillRule="evenodd"
          stroke="#000"
        />
        <path
          d="M242 194.9l-5.2-9.5c2-2 5.3-3.6 10.7-3.6l-.6 10.5-5 2.6z"
          fill="#de3108"
          fillRule="evenodd"
          stroke="#000"
        />
        <path
          d="M247 192.3l.7-10.5s10.7-.6 16.5 6.4l-5.7 8.2-11.6-4z"
          fill="#ffe700"
          fillRule="evenodd"
          stroke="#000"
        />
        <path
          d="M258.6 196.3l5.3-8.2c3.5 3.7 5 6.3 5.5 10.3.1.1-8.3 2.1-8.3 2l-2.5-4.1z"
          fill="#de3108"
          fillRule="evenodd"
          stroke="#000"
        />
        <path
          d="M244.6 331.1s9.9-11.3 29.1-8.9c-2.9-4.7-12.3-4.1-12.3-4.1s-2.8-22-.6-23.2 12 .1 12 .1c1.2 0 3.4-3.4 1.6-5.6-1.7-2.2-6.8-10.5-4.7-12.2 2.1-1.6 13.4 1 13.4 1l-32-41s-3.3-15.5 3.3-23c7.9-6.5 7-13.6 6.8-13.5-1.1-7.2-12-12.3-19.4-5.7-4.3 5.2-1.4 9.2-1.4 9.2s-11.5 3.1-11.9 5.1c-.5 2 12.9-.3 12.9-.3l-1.3 9.1s-26 23.6-6 44l.6-.8s7 8.6 14.3 10.5c7 7 6.3 6 6.3 6s1.3 11.1 0 13.3c-1.7-.5-19.3-1.2-21.9-.2-2.4.8-11.4.3-9.2 15.1l3.3-7.5s-.3 5.3 1.9 7.2c-.4-5.6 2.1-9.4 2.1-9.4s.4 6.2 1.8 7c1.4 1 1.4-10 9-9 7.4.9 12.9.6 12.9.6s2.5 21.4 1.7 23.4c-5.4-1.3-18.4.5-19.2 3.8 7.6-.5 11.1.4 11.1.4s-6.1 5.5-4.2 8.6z"
          fillRule="evenodd"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.9}
        />
        <path
          d="M247.6 214.8s-18.9 20.8-10.7 36.7c.4-2.2.2-3.6.5-3.5-.5-.3 2.3 1.9 2.1 1.5 0-1.2-.8-3.7-.8-3.7l2.5.7-1.5-2.8 3.7.4s-1.3-3.4-.9-3.4l3 .2c-5.4-9.6-.3-17.6 2.1-26.2z"
          fill="#9ca69c"
          fillRule="evenodd"
          stroke="#9ca69c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.9}
        />
        <path
          d="M254.2 196.9s1 7.2-3 9.2c-.5.5-3 1.3-2.6 2.8.4 2 1.5 1.6 3 1.2 4.1-.7 8.9-9.4 2.6-13.2z"
          fill="#9ca69c"
          fillRule="evenodd"
          stroke="#9ca69c"
        />
        <path d="M247.2 203a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#fff" fillRule="evenodd" />
        <path
          d="M241.1 209c-1 .9-6.2 6.3-1 8.3 5.3-1.4 3.8-2.4 5-3.6 0-2.5-2.6-3.1-4-4.6z"
          fill="#de3108"
          fillRule="evenodd"
          stroke="#000"
        />
        <path
          d="M252.6 260.5c-.3 1.2-1.5 5.6.1 9 4.6-2 6.7-1.4 8.2-.4-3.7-3-5.2-4.3-8.3-8.6z"
          fill="#9ca69c"
          fillRule="evenodd"
          stroke="#9ca69c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.9}
        />
        <path
          d="M260.4 281.1l.2 10.2s3.6.6 5.2 0 0-7-5.4-10.2z"
          fill="#fff"
          fillRule="evenodd"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.9}
        />
        <path
          d="M286 282.4s-6.5-15.8-23.2-19.8-14.5-21.8-13.2-22.9c.8-1.5 1.3-3.9 6.1-1.6s27 13.4 30.2 14 .4 30.7.2 30.3z"
          fill="#9ca69c"
          fillRule="evenodd"
          stroke="#000"
        />
        <path
          d="M270.2 262.5c-.3.2 22.3 13.4 15.5 24.7 6.4-4.3 4.4-11.7 4.4-11.7s5.2 13.7-7.6 20.4c1.4 1.2 2.3 1 2.3 1l-2.2 2.1s-1 1.7 7.6-2.5c-2.3 1.9-2.5 3.3-2.5 3.3s.6 1.8 6.2-3.1c-4.5 4.9-5.5 7.4-5.5 7.3 12.3-1 39-41-8.4-52.7l2.1 2.2-12 9z"
          fill="#de3108"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={0.9}
        />
        <path
          d="M271.2 258.6c3 2.2 4.1 3 4.5 4-2.8-.6-5.3-.4-5.3-.4s-6.1-5.8-7.2-6.3c-.8 0-5.6-3-5.6-3-2.3-1.2-4.5-9.3 4.2-7a93 93 0 0010.3 4.6l10.7 3.4 6.2 6.9s-11-5.4-12.4-5.5c3 2.4 4.7 5.8 4.7 5.8-3.5-1-6.5-2-10.1-2.5z"
          fill="#fff"
          fillRule="evenodd"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.9}
        />
        <path
          d="M228.4 209.9s10.5-2.6 11.8-2.2"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={0.9}
        />
        <path d="M-128 426.7h768V512h-768z" fill="#de3908" fillRule="evenodd" />
      </g>
    </svg>
  );
};

const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const UGFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));

UGFlagIcon.displayName = 'UGFlagIcon';
