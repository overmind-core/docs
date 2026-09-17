export const ModelCatalog = () => {
  const labels = {
    cisco: "Cisco",
    google: "Google",
    liquid: "Liquid",
    meta: "Meta",
    nvidia: "NVIDIA",
    openai: "OpenAI",
    qwen: "Qwen",
  };
  const tiers = ["compact", "small", "mid", "large"];
  const rows = [
    ["qwen", "Qwen 3.5 4B", "Qwen/Qwen3.5-4B", "yes", "compact", "262144 inference, 131072 train, tool calling"],
    ["qwen", "Qwen 3.5 2B", "Qwen/Qwen3.5-2B", "yes", "compact", "262144 inference, 131072 train, tool calling"],
    ["qwen", "Qwen 3.5 0.8B", "Qwen/Qwen3.5-0.8B", "yes", "compact", "262144 inference, 131072 train, tool calling"],
    ["qwen", "Qwen 3 4B", "Qwen/Qwen3-4B", "yes", "compact", "131072 inference, 40960 train, tool calling"],
    ["qwen", "Qwen 3 1.7B", "Qwen/Qwen3-1.7B", "yes", "compact", "131072 inference, 40960 train, no tool calling"],
    ["qwen", "Qwen 3 0.6B", "Qwen/Qwen3-0.6B", "yes", "compact", "131072 inference, 40960 train, no tool calling"],
    ["qwen", "Qwen 2.5 0.5B Instruct", "Qwen/Qwen2.5-0.5B-Instruct", "yes", "compact", "32768 context, no tool calling"],
    ["meta", "Llama 3.2 3B Instruct", "meta-llama/Llama-3.2-3B-Instruct", "yes", "compact", "131072 context, no tool calling"],
    ["meta", "Llama 3.2 1B Instruct", "meta-llama/Llama-3.2-1B-Instruct", "yes", "compact", "131072 context, no tool calling"],
    ["liquid", "LFM2.5 1.2B Instruct", "LiquidAI/LFM2.5-1.2B-Instruct", "yes", "compact", "32768 context, tool calling"],
    ["liquid", "LFM2.5 350M", "LiquidAI/LFM2.5-350M", "yes", "compact", "32768 context, tool calling"],
    ["liquid", "LFM2.5 230M", "LiquidAI/LFM2.5-230M", "yes", "compact", "32768 context, tool calling"],
    ["cisco", "Antares 1B (Security)", "fdtn-ai/antares-1b", "yes", "compact", "131072 context, tool calling"],
    ["cisco", "Antares 350M (Security)", "fdtn-ai/antares-350m", "yes", "compact", "32768 context, tool calling"],
    ["qwen", "Qwen 3.5 9B", "Qwen/Qwen3.5-9B", "yes", "small", "262144 inference, 131072 train, tool calling"],
    ["qwen", "Qwen 3 8B", "Qwen/Qwen3-8B", "yes", "small", "131072 inference, 40960 train, tool calling"],
    ["qwen", "Qwen 2.5 7B Instruct", "Qwen/Qwen2.5-7B-Instruct", "yes", "small", "131072 inference, 32768 train, tool calling"],
    ["google", "Gemma 4 E4B", "google/gemma-4-E4B-it", "yes", "small", "131072 context, tool calling"],
    ["google", "Gemma 4 E2B", "google/gemma-4-E2B-it", "yes", "small", "131072 context, tool calling"],
    ["meta", "Llama 3.1 8B Instruct", "meta-llama/Llama-3.1-8B-Instruct", "yes", "small", "131072 context, tool calling"],
    ["qwen", "Qwen 3.8 27B", "Qwen/Qwen3.8-27B", "LoRA-only", "mid", "262144 context, tool calling"],
    ["qwen", "Qwen 3.6 27B", "Qwen/Qwen3.6-27B", "LoRA-only", "mid", "262144 context, tool calling"],
    ["qwen", "Qwen 3.5 27B", "Qwen/Qwen3.5-27B", "LoRA-only", "mid", "262144 context, tool calling"],
    ["qwen", "Qwen 3 Coder 30B MoE", "Qwen/Qwen3-Coder-30B-A3B-Instruct", "LoRA-only", "mid", "262144 inference, 65536 train, tool calling"],
    ["qwen", "Qwen 3 14B", "Qwen/Qwen3-14B", "yes", "mid", "131072 inference, 40960 train, tool calling"],
    ["qwen", "Qwen 2.5 14B Instruct", "Qwen/Qwen2.5-14B-Instruct", "yes", "mid", "131072 inference, 32768 train, tool calling"],
    ["google", "Gemma 4 12B", "google/gemma-4-12B-it", "yes", "mid", "262144 inference, LoRA 131072, full 65536, tool calling"],
    ["openai", "GPT-OSS 20B", "openai/gpt-oss-20b", "LoRA-only", "mid", "131072 context, tool calling"],
    ["qwen", "Qwen 3.5 35B MoE", "Qwen/Qwen3.5-35B-A3B", "LoRA-only", "large", "262144 context, tool calling"],
    ["qwen", "Qwen 3 32B", "Qwen/Qwen3-32B", "LoRA-only", "large", "131072 inference, 40960 train, tool calling"],
    ["qwen", "Qwen 2.5 72B Instruct", "Qwen/Qwen2.5-72B-Instruct", "LoRA-only", "large", "131072 inference, 32768 train, no tool calling"],
    ["qwen", "Qwen 2.5 32B Instruct", "Qwen/Qwen2.5-32B-Instruct", "LoRA-only", "large", "131072 inference, 32768 train, tool calling"],
    ["qwen", "Qwen 2.5 Coder 32B Instruct", "Qwen/Qwen2.5-Coder-32B-Instruct", "LoRA-only", "large", "131072 inference, 32768 train, tool calling"],
    ["google", "Gemma 4 31B", "google/gemma-4-31B-it", "LoRA-only", "large", "262144 inference, 65536 train, tool calling"],
    ["google", "Gemma 4 26B-A4B", "google/gemma-4-26B-A4B-it", "LoRA-only", "large", "262144 inference, 65536 train, tool calling"],
    ["meta", "Llama 3.3 70B Instruct", "meta-llama/Llama-3.3-70B-Instruct", "LoRA-only", "large", "131072 context, tool calling"],
    ["meta", "Muse Glimmer 30B", "unsloth/Muse-Glimmer-30B", "LoRA-only", "large", "131072 context, tool calling"],
    ["nvidia", "Nemotron 3.5 Lightning 30B-A3B", "nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B", "LoRA-only", "large", "262144 context, tool calling"],
  ];
  const providers = ["qwen", "meta", "liquid", "cisco", "google", "openai", "nvidia"];
  const [query, setQuery] = useState("");
  const [providerFilter, setProviderFilter] = useState([]);
  const [tierFilter, setTierFilter] = useState([]);
  const toggle = (list, value) =>
    list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
  const needle = query.trim().toLowerCase();
  const visible = rows.filter(([provider, name, id, trainable, tier, notes]) => {
    if (providerFilter.length && !providerFilter.includes(provider)) return false;
    if (tierFilter.length && !tierFilter.includes(tier)) return false;
    if (!needle) return true;
    return [labels[provider], name, id, trainable, tier, notes].join(" ").toLowerCase().includes(needle);
  });
  const chipLogo = (provider) => (
    <span aria-hidden="true" className="om-model-chip-logo" data-logo={provider} />
  );
  return (
    <div className="om-model-catalog" data-table-wrapper="">
      <div className="om-model-catalog-toolbar">
        <input
          type="search"
          className="om-model-catalog-search"
          value={query}
          placeholder="Search"
          aria-label="Search models"
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setQuery("");
          }}
        />
        <div className="om-model-catalog-filters" role="group" aria-label="Provider">
          {providers.map((provider) => {
            const on = providerFilter.includes(provider);
            return (
              <button
                key={provider}
                type="button"
                className="om-model-chip om-filter-chip"
                aria-pressed={on}
                onClick={() => setProviderFilter(toggle(providerFilter, provider))}
              >
                {chipLogo(provider)}
                <span>{labels[provider]}</span>
              </button>
            );
          })}
        </div>
        <div className="om-model-catalog-filters" role="group" aria-label="Tier">
          {tiers.map((tier) => {
            const on = tierFilter.includes(tier);
            return (
              <button
                key={tier}
                type="button"
                className="om-model-chip om-filter-chip"
                aria-pressed={on}
                onClick={() => setTierFilter(toggle(tierFilter, tier))}
              >
                <span>{tier}</span>
              </button>
            );
          })}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Serving id</th>
            <th>Trainable</th>
            <th>Tier</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {visible.length === 0 ? (
            <tr className="om-model-catalog-empty">
              <td colSpan={5}>No models match.</td>
            </tr>
          ) : (
            visible.map(([provider, name, id, trainable, tier, notes]) => (
              <tr key={id}>
                <td>
                  <span className="om-model-chip" title={name}>
                    {chipLogo(provider)}
                    <span>{name}</span>
                  </span>
                </td>
                <td>
                  <code>{id}</code>
                </td>
                <td>{trainable}</td>
                <td>{tier}</td>
                <td>{notes}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
