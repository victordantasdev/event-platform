import { IconProps } from "phosphor-react";
import { ReactElement } from "react";

interface IButton {
  variant: 'primary' | 'secondary';
  icon?: ReactElement<any, any>
  href: string;
  buttonText: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
}

export const Button = ({ variant, icon, href, buttonText, target }: IButton) => (
  <>
    {variant === "primary" ? (
      <a href={href} target={target} className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
        <>
          {icon}
          {buttonText}
        </>
      </a>
    ) : (
      <a href={href} target={target} className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
        <>
          {icon}
          {buttonText}
        </>
      </a>
    )}
  </>
)
