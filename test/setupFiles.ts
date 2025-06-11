import '@testing-library/jest-dom'
import { server } from './server.ts'
import { beforeAll, afterEach, afterAll } from 'vitest'

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
