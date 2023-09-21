import styled from 'styled-components'

interface CardSummaryContainerProps {
  type: 'entry' | 'exit' | 'total'
}

export const CardSummaryContainer = styled.div<CardSummaryContainerProps>`
  width: 100%;
  padding: 1.5rem;
  background-color: ${(props) =>
    props.type === 'total'
      ? props.theme['green-500']
      : props.theme['gray-700']};
  border-radius: 6px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.75rem;

    span {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  strong {
    color: ${(props) => props.theme['gray-100']};
    font-size: 2rem;
  }
`
