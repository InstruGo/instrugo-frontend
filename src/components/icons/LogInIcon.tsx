import { IconWrapper, IconWrapperProps } from './IconWrapper';

export const LogInIcon = ({ width, height, fill }: IconWrapperProps) => {
  return (
    <IconWrapper fill={fill} width={width} height={height}>
      <g>
        <rect fill="#fff" height={width} width={height} x="0" />
      </g>
      <g>
        <path d="M10,4v1h6v10h-6v1h6c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1H10z" />
        <polygon points="9.5,6.5 8.79,7.21 11.09,9.5 3,9.5 3,10.5 11.09,10.5 8.79,12.79 9.5,13.5 13,10" />
      </g>
    </IconWrapper>
  );
};
