import Gasto from "./Gasto"

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {
  return (
    <div className="listado-gasto contenedor">


      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? `Gastos en ${filtro}` : "No hay gastos en esta categoria."}</h2>
          {
            gastosFiltrados.map(gasto => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}

              />
            ))
          }
        </>) : (
        <>
          <h2>{gastosFiltrados.length ? `Todos los Gastos` : "No hay gastos resgistrados."}</h2>
          {gastos.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}

            />
          ))}
        </>
      )
      }
    </div>
  )
}

export default ListadoGastos