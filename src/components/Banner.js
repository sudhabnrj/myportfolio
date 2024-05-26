import React from 'react'
import './banner.css';


const Banner = () => {
  return (
	<div className="animated-png relative">
		<div className="error404page h-[800px]">
			<div className="newcharacter404 w-full sm:w-[400px] h-[800px] left-2/4 lg:left-0 -top-[25px] -translate-x-1/2 lg:translate-x-0">
				<div className="chair404"></div>
				<div className="leftshoe404"></div>
				<div className="rightshoe404"></div>
				<div className="legs404"></div>
				<div className="torso404">
				<div className="body404"></div>
				<div className="leftarm404"></div>
				<div className="rightarm404"></div>
				<div className="head404">
					<div className="eyes404"></div>
				</div>
				</div>
				<div className="laptop404"></div>
			</div>
		</div>
	</div>
  )
}

export default Banner;