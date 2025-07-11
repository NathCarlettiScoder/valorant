import { SVGProps, memo } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponent = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title === undefined ? (
      <title id={titleId}>{'Settings'}</title>
    ) : title ? (
      <title id={titleId}>{title}</title>
    ) : null}
    <path d="M2.16667 15.5C1.70833 15.5 1.31597 15.3368 0.989583 15.0104C0.663194 14.684 0.5 14.2917 0.5 13.8333V2.16667C0.5 1.70833 0.663194 1.31597 0.989583 0.989583C1.31597 0.663194 1.70833 0.5 2.16667 0.5H8V2.16667H2.16667V13.8333H13.8333V8H15.5V13.8333C15.5 14.2917 15.3368 14.684 15.0104 15.0104C14.684 15.3368 14.2917 15.5 13.8333 15.5H2.16667ZM6.08333 11.0833L4.91667 9.91667L12.6667 2.16667H9.66667V0.5H15.5V6.33333H13.8333V3.33333L6.08333 11.0833Z" />
  </svg>
);
const Settings = memo(SvgComponent);
export default Settings;