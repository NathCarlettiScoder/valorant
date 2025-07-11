import { SVGProps, memo } from "react"

function SvgComponent({...props}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={"currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-scroll-text"
      {...props}
    >
      <path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 00-2-2H4" />
      <path d="M8 21h12a2 2 0 002-2v-1a1 1 0 00-1-1H11a1 1 0 00-1 1v1a2 2 0 11-4 0V5a2 2 0 10-4 0v2a1 1 0 001 1h3" />
    </svg>
  )
}
const Plans = memo(SvgComponent)
export default Plans
