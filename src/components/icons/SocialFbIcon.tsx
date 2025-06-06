import type {FC} from "react";
import type {IconProps} from "./props";

const SocialFbIcon: FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      {...props}
    >
      <g id="icon">
        <path id="Vector" d="M25.961 4.47656H7.29201C5.82515 4.47656 4.625 5.67671 4.625 7.14357V25.8126C4.625 27.2808 5.82515 28.4796 7.29201 28.4796H16.6265V19.1451H13.9595V15.8447H16.6265V13.111C16.6265 10.2253 18.2427 8.19837 21.6485 8.19837L24.0528 8.20104V11.6748H22.4566C21.1311 11.6748 20.627 12.6696 20.627 13.5924V15.846H24.0515L23.294 19.1451H20.627V28.4796H25.961C27.4279 28.4796 28.628 27.2808 28.628 25.8126V7.14357C28.628 5.67671 27.4279 4.47656 25.961 4.47656Z" fill="#F3F3F3"/>
      </g>
    </svg>
  );
};

export default SocialFbIcon;