

export default function TailCard({ galTitle, galWebImageUrl, galPhotographyLocation, galSearchKeyword }) {
    // if (!item) return null; 

    // const {
    //     galTitle,
    //     galWebImageUrl,
    //     galPhotographyLocation,
    //     galSearchKeyword,
    // } = item;

    // 쉼표와 공백으로 키워드 분리
        const keywords = galSearchKeyword
        ?.split(/[\s,]+/) // 쉼표 또는 공백 기준 split
        .filter((kw) => kw.trim() !== "");

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition hover:scale-[1.01]">
      {galWebImageUrl?.startsWith("http") && (
      <img
        src={galWebImageUrl}
        alt={galTitle}
        className="w-full h-48 object-cover"
      />
       )}

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-blue-700 dark:text-blue-300
                        truncate whitespace-nowrap overflow-hidden" title={galTitle}>
          {galTitle}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
          📍 {galPhotographyLocation}
        </p>
        {/* <p className="text-xs text-gray-500 dark:text-gray-400">
          🏷️ {galSearchKeyword}
        </p> */}
        {/* ✅ 키워드 뱃지 */}
        <div className="flex flex-wrap gap-2">
          {keywords.map((kw, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-200"
            >
              #{kw}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
