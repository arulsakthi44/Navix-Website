import svgPaths from "./svg-7ynfbab5gf";
import clsx from "clsx";
type Fi11891732VectorProps = {
  additionalClassNames?: string;
};

function Fi11891732Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<Fi11891732VectorProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        {children}
      </svg>
    </div>
  );
}

export default function Fi() {
  return (
    <div className="relative size-full" data-name="fi_11891732">
      <div className="absolute inset-[2.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
          <path d={svgPaths.p3d79d00} fill="url(#paint0_linear_41_17)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_41_17" x1="1.13312e-06" x2="21.5794" y1="20" y2="1.66926">
              <stop />
              <stop offset="0.148573" stopColor="#5F3014" />
              <stop offset="0.297146" stopColor="#AC4C15" />
              <stop offset="0.490385" stopColor="#C6C6C6" />
              <stop offset="0.725962" stopColor="#2056AE" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Fi11891732Vector additionalClassNames="inset-[69.36%_69.36%_10.95%_10.95%]">
        <path d={svgPaths.p300c4c00} fill="url(#paint0_linear_41_13)" id="Vector" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_41_13" x1="1.176" x2="7.24702" y1="0.974113" y2="1.18501">
            <stop />
            <stop offset="0.148573" stopColor="#5F3014" />
            <stop offset="0.297146" stopColor="#AC4C15" />
            <stop offset="0.490385" stopColor="#C6C6C6" />
            <stop offset="0.725962" stopColor="#2056AE" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </Fi11891732Vector>
      <Fi11891732Vector additionalClassNames="inset-[10.95%_10.95%_69.36%_69.36%]">
        <path d={svgPaths.p3f470c80} fill="url(#paint0_linear_41_15)" id="Vector" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_41_15" x1="1.176" x2="7.24702" y1="0.974113" y2="1.18501">
            <stop />
            <stop offset="0.148573" stopColor="#5F3014" />
            <stop offset="0.297146" stopColor="#AC4C15" />
            <stop offset="0.490385" stopColor="#C6C6C6" />
            <stop offset="0.725962" stopColor="#2056AE" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </Fi11891732Vector>
    </div>
  );
}