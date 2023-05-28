export default function truncar(v: number, limit: number) {
	let count = 0
	let result = ''
	let foundDot = false

	for (const c of '' + v) {
		if (c === '.') {
			foundDot = true
			result += c
			continue
		}
		if (count === 0 && c === '0') {
			result += c
			continue
		}
		count++
		if (count > limit) {
			if (!foundDot)
				result += '0'
		} else {
			result += c
		}
	}
	return Number(result)
}