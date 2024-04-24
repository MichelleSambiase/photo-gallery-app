import React, { SVGProps } from 'react'

type StopColor = string

interface IAnimatedBlob {
	className?: string
	stopColor: StopColor | undefined
}
const AnimatedBlob = ({ className = '', stopColor }: IAnimatedBlob) => {
	const gradientId = `gradient-${stopColor}`

	return (
		<svg
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 500 500'
			width='100%'
			className={className}
			id='blobSvg'
			transform='rotate(-115)'
			style={{ opacity: 1 }}>
			<defs>
				<linearGradient id={gradientId} x1='0%' y1='0%' x2='0%' y2='100%'>
					<stop offset='0%' style={{ stopColor: stopColor }} />
				</linearGradient>
			</defs>
			<path id='blob' fill={`url(#${gradientId})`} style={{ opacity: 0.8 }}>
				<animate
					attributeName='d'
					dur='30000ms'
					repeatCount='indefinite'
					values='M402.82336,294.74662Q372.52122,339.49324,339.45366,380.77461Q306.3861,422.05598,251.70463,416.9165Q197.02317,411.77702,159.66506,377.28619Q122.30695,342.79537,72.75579,296.39768Q23.20463,250,37.88851,178.24662Q52.57238,106.49324,117.0304,72.97924Q181.48842,39.46525,238.53957,73.79537Q295.59073,108.12549,332.49083,135.50917Q369.39092,162.89286,401.2582,206.44643Q433.12549,250,402.82336,294.74662Z;M453.70516,317.0107Q433.36186,384.02139,362.52423,381.146Q291.6866,378.27061,242.8433,399.93801Q194,421.60541,117.08118,412.14317Q40.16237,402.68093,64.29201,326.34046Q88.42165,250,109.0107,206.32693Q129.59975,162.65387,148.64317,78.76495Q167.6866,-5.12397,241.8433,20.74072Q316,46.60541,350.8433,99.17023Q385.6866,151.73505,429.86753,200.86753Q474.04846,250,453.70516,317.0107Z;M403.5,294Q372,338,343,393Q314,448,254,435.5Q194,423,138,397.5Q82,372,88,311Q94,250,86,187.5Q78,125,134,95.5Q190,66,253,57Q316,48,362,91.5Q408,135,421.5,192.5Q435,250,403.5,294Z;M423.38828,307.00416Q406.39243,364.00831,353.55217,384.57202Q300.71191,405.13573,242.06787,430.50416Q183.42382,455.87258,116.5554,425.63666Q49.68697,395.40075,58.87581,322.70037Q68.06464,250,86.66067,197.31625Q105.2567,144.63251,148.86843,108.53648Q192.48015,72.44045,252.10019,66.13989Q311.72022,59.83933,378.54063,84.21929Q445.36105,108.59925,442.87258,179.29963Q440.38412,250,423.38828,307.00416Z;M439.43806,316.51312Q432.44085,383.02623,370.39398,407.14258Q308.3471,431.25893,240.13979,459.78516Q171.93248,488.31139,132.30301,426.26451Q92.67355,364.21763,63.21484,307.10882Q33.75613,250,44.06194,178.90151Q54.36774,107.80301,118.67355,75.31613Q182.97935,42.82924,240.60882,72.66602Q298.23828,102.50279,368.10882,107.87054Q437.97935,113.23828,442.20731,181.61914Q446.43527,250,439.43806,316.51312Z;M428.88107,298.41731Q382.87896,346.83463,343.6411,381.94757Q304.40324,417.06052,249.73188,417.66327Q195.06052,418.26602,121.90324,407.33463Q48.74595,396.40324,42.90922,323.20162Q37.07249,250,50.04223,182.03624Q63.01197,114.07249,129.2076,98.49191Q195.40324,82.91133,251.0746,78.83673Q306.74595,74.76214,356.50598,105.64321Q406.26602,136.52427,440.5746,193.26214Q474.88318,250,428.88107,298.41731Z;M437.48517,301.93698Q392.82947,353.87396,357.50371,413.21131Q322.17795,472.54867,247.51112,479.51159Q172.8443,486.47452,129.54819,427.64458Q86.25209,368.81464,81.57785,309.40732Q76.90361,250,83.86283,191.93327Q90.82205,133.86654,141.98146,104.152Q193.14087,74.43745,247.01483,83.88926Q300.88878,93.34106,355.51112,113.62234Q410.13346,133.90361,446.13717,191.95181Q482.14087,250,437.48517,301.93698Z;M402.82336,294.74662Q372.52122,339.49324,339.45366,380.77461Q306.3861,422.05598,251.70463,416.9165Q197.02317,411.77702,159.66506,377.28619Q122.30695,342.79537,72.75579,296.39768Q23.20463,250,37.88851,178.24662Q52.57238,106.49324,117.0304,72.97924Q181.48842,39.46525,238.53957,73.79537Q295.59073,108.12549,332.49083,135.50917Q369.39092,162.89286,401.2582,206.44643Q433.12549,250,402.82336,294.74662Z'
				/>
			</path>
		</svg>
	)
}

export default AnimatedBlob
