# Lessons

## Terminology
- Never use "fine-tune" as a noun (e.g. "your fine-tune vs. your production model"). Use "trained model" / "training" / "training run" as the generic terms, matching the website's copy. Reserve "full fine-tuning" and "LoRA" for contexts where the specific training method matters.
- Technical identifiers (endpoint paths like `/api/finetuning-jobs/...`, enum values, header names) are never renamed to match prose terminology.

## Models pages
- Always link the public [Model Library](https://www.overmindlab.ai/models) from both Training and Inference. Do not replace it with a hard-coded family list or omit it when rewriting those pages — the library is the live catalogue (params, context, pricing). Keep launch-enforced caveats (max training context vs inference context; tool-calling support) on Training.

## Docs visual language
- Target: turbopuffer-like quiet technical docs, not a marketing pixel playground. Body = Geist Sans; code = Geist Mono; Mondwest only on H1; Geist Pixel only for chrome (section eyebrows, TOC label). Copper is the sole brand accent.
- Do not reintroduce: grid background, custom cursors, pixel body text, square sidebar markers, heavy warm cream surfaces, or CRT/pixel-frame chrome from the website.
- Prefer stone canvas (`#f6f5f1` / `#16120f`), hairline borders, no card shadows, underline links in prose.
- Shiki dual-theme: light tokens are `color: rgb(...)`; dark tokens are `--shiki-dark: #...` (space after colon). Never remap by hex `color:#...` match — in `.dark` use `color: var(--shiki-dark) !important` or empty code blocks appear (light ink on dark paper).

## Writing style
- Docs prose is drafted for engineers: short, direct, active sentences. Proofread for grammar and awkward phrasing before presenting, rather than relying on a follow-up pass.
- Align product-term capitalisation (Console, Workshop, eval set, etc.) with the website repo before writing, not after.
