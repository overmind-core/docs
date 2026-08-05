# Lessons

## Terminology
- Never use "fine-tune" as a noun (e.g. "your fine-tune vs. your production model"). Use "trained model" / "training" / "training run" as the generic terms, matching the website's copy. Reserve "full fine-tuning" and "LoRA" for contexts where the specific training method matters.
- Technical identifiers (endpoint paths like `/api/finetuning-jobs/...`, enum values, header names) are never renamed to match prose terminology.

## Models pages
- Always link the public [Model Library](https://www.overmindlab.ai/models) from both Training and Inference. Do not replace it with a hard-coded family list or omit it when rewriting those pages — the library is the live catalogue (params, context, pricing). Keep launch-enforced caveats (max training context vs inference context; tool-calling support) on Training.

## Writing style
- Docs prose is drafted for engineers: short, direct, active sentences. Proofread for grammar and awkward phrasing before presenting, rather than relying on a follow-up pass.
- Align product-term capitalisation (Console, Workshop, eval set, etc.) with the website repo before writing, not after.
