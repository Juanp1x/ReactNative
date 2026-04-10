export const obtenerPaises = async () => {
  try {
    const response = await fetch(
  "https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,cca3"
);
    const data = await response.json();

    // Ordenar alfabéticamente (opcional pero recomendado)
    const paisesOrdenados = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

    return paisesOrdenados;

  } catch (error) {
    console.error("Error al obtener países:", error);
    return [];
  }
};