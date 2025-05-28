import { ChevronRight } from 'lucide-react';
import React from 'react'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='flex items-center text-on-surface-strong gap-1 font-normal '>
      HOME <ChevronRight size={14}/> {product.category} <ChevronRight size={14}/> {product.name}
    </div>

    
  )
}

export default Breadcrum

{/* <nav class="text-sm font-medium text-on-surface dark:text-on-surface-dark" aria-label="breadcrumb">
	<ol class="flex flex-wrap items-center gap-1">
		<li class="flex items-center gap-1">
			<a href="#" class="hover:text-on-surface-strong dark:hover:text-on-surface-dark-strong">Home</a>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke-width="2" stroke="currentColor" class="size-4">
				<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
			</svg>
		</li>
		<li class="flex items-center gap-1">
			<a href="#" class="hover:text-on-surface-strong dark:hover:text-on-surface-dark-strong">Components</a>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke-width="2" stroke="currentColor" class="size-4">
				<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
			</svg>
		</li>
		<li class="flex items-center text-on-surface-strong gap-1 font-bold dark:text-on-surface-dark-strong" aria-current="page">Breadcrumb</li>
	</ol>
</nav> */}
