import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 01</td>
              <td>30 minutos</td>
              <td>A cerca de 2 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>30 minutos</td>
              <td>A cerca de 2 dias</td>
              <td>
                <Status statusColor="red">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>30 minutos</td>
              <td>A cerca de 2 dias</td>
              <td>
                <Status statusColor="red">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>30 minutos</td>
              <td>A cerca de 2 dias</td>
              <td>
                <Status statusColor="yellow">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>30 minutos</td>
              <td>A cerca de 2 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>30 minutos</td>
              <td>A cerca de 2 dias</td>
              <td>
                <Status statusColor="red">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>30 minutos</td>
              <td>A cerca de 2 dias</td>
              <td>
                <Status statusColor="yellow">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
