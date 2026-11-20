import { Timestamp } from '@microservice-cinema/contracts/gen/ts/google/protobuf/timestamp'

export function timestampToISO(ts: Timestamp) {
	return new Date(ts.seconds * 1000 + ts.nanos / 1_000_000).toISOString()
}