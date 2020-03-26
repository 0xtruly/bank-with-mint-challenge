import React from 'react';

const SearchComponent = ({ className, placeholder }) => {
	return (
		<div className="search">
			<form>
				<label htmlFor="search" className={className}>
					<input
						type="search"
						id="searchField"
						className="label-input"
						placeholder={placeholder}
					/>
					<button className="form-button-svg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="19.772"
							height="20.534"
							viewBox="0 0 19.772 20.534"
						>
							<defs></defs>
							<path
								className="a"
								d="M20.646,19.877l-5.761-5.991a8.148,8.148,0,1,0-.573.523l5.774,6.006a.388.388,0,1,0,.559-.537ZM9.124,15.507A7.366,7.366,0,1,1,16.49,8.141,7.374,7.374,0,0,1,9.124,15.507Z"
								transform="translate(-0.983)"
							/>
						</svg>
					</button>
				</label>
			</form>
		</div>
	);
};

export default SearchComponent;
