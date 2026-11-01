import type { Question } from '../lib/types'

export function QuestionBody({ question: q }: { question: Question }) {
  return (
    <div>
      <p className="whitespace-pre-line">{q.stem}</p>
      {q.lines && (
        <ol className="my-2 space-y-1 pl-1">
          {q.lines.map((line, i) => (
            <li key={i} className="whitespace-pre-line">{line}</li>
          ))}
        </ol>
      )}
      {q.ask && <p className="mt-2 whitespace-pre-line">{q.ask}</p>}
    </div>
  )
}
