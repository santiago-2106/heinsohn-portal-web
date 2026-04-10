import React from 'react';

const SliderSvg: React.FC = () =>{
  return (
    <svg
      
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      className="w-[390px] h-[582px]"
      stroke="currentColor"
    >
      {/* Rectángulos de estructura */}
      <rect 
        x=".996582" 
        y="579.838" 
        width="391" 
        height="480" 
        transform="rotate(-90 0.996582 579.838)" 
      />
      <rect 
        x="1" 
        y="578.987" 
        width="389" 
        height="480" 
        transform="rotate(-90 1 578.987)" 
      />
      <rect 
        x="481" 
        y=".216309" 
        width="189" 
        height="480" 
        transform="rotate(90 481 0.216309)" 
      />

      {/* Trazados (Paths) principales */}
      <path d="M197.724 188.646c107.818.0 195.222 87.404 195.222 195.222C392.946 491.687 305.542 579.092 197.724 579.092c-107.819 2.0-195.22403-87.405-195.22402-195.224C2.50023 276.05 89.905 188.646 197.724 188.646z" />
      <path d="M197 579.217v-390" />

      {/* Definición de la máscara original */}
      <defs>
        <mask 
          id="mask0_901_34428" 
          style={{ maskType: 'alpha' }} 
          maskUnits="userSpaceOnUse" 
          x="0" 
          y="0" 
          width="200" 
          height="191"
        >
          <path 
            d="M199.024.533427.975586.533203.975585 189.825H199.024V.533427z" 
            fill="#D9D9D9" 
            stroke="#AAA" 
          />
        </mask>
      </defs>

      {/* Elemento con máscara aplicada */}
      <g mask="url(#mask0_901_34428)">
        <path d="M9.67733 375.407C113.133 375.407 197 291.54 197 188.084 197 84.629 113.133.761569 9.67731.761448-93.7782.761328-177.646 84.6285-177.645 188.084c0 103.456 83.8668 187.323 187.32233 187.323z" />
      </g>
    </svg>
  );
};

export default SliderSvg;