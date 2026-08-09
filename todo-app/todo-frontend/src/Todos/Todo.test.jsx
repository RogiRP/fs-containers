import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

describe('Todo', () => {
  it('renders the todo text', () => {
    const todo = { text: 'Buy milk', done: false }
    render(<Todo todo={todo} onClickDelete={vi.fn()} onClickComplete={vi.fn()} />)
    expect(screen.getByText('Buy milk')).toBeDefined()
  })

  it('shows "not done" status when todo is not done', () => {
    const todo = { text: 'Buy milk', done: false }
    render(<Todo todo={todo} onClickDelete={vi.fn()} onClickComplete={vi.fn()} />)
    expect(screen.getByText('This todo is not done')).toBeDefined()
  })

  it('shows "done" status when todo is done', () => {
    const todo = { text: 'Buy milk', done: true }
    render(<Todo todo={todo} onClickDelete={vi.fn()} onClickComplete={vi.fn()} />)
    expect(screen.getByText('This todo is done')).toBeDefined()
  })
})