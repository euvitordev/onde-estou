export function LocationHistoryComponent() {
  const locationHistory = [
    {
      data: "1 hora atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
    {
      data: "1 dia atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
    {
      data: "7 dias atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
    {
      data: "1 hora atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
    {
      data: "1 dia atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
    {
      data: "7 dias atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
    {
      data: "1 hora atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
    {
      data: "1 dia atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
    {
      data: "7 dias atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
    {
      data: "1 hora atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
    {
      data: "1 dia atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
    {
      data: "7 dias atras",
      localizacao:
        "Endereço: R. B, 90 - Morada da Col. I, Barra Mansa - RJ, 27351-410, Brasil",
    },
  ];

  return (
    <>
      <div className="flex h-[86vh] w-96 flex-col gap-8 rounded-lg border p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
        <h1 className="font-medium dark:text-zinc-200">Últimas alterações</h1>

        <div className="historyLocale-scrollbar overflow-y-auto px-1">
          <div className="relative flex flex-col gap-8 border-l border-zinc-600">
            {locationHistory.map((item, index) => (
              <div className="flex flex-col gap-1 px-4" key={index}>
                <span className="absolute -inset-x-1 h-2 w-2 rounded-full bg-zinc-500" />
                <span className="text-sm text-zinc-400">{item.data}</span>
                <p className="text-md text-zinc-200">{item.localizacao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
