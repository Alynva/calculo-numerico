export default function arredondar(v: number, limit: number) {
	return Number(v.toPrecision(limit))
}
