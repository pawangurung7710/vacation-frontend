---
trigger: always_on
---

# Workspace Rules – Efficient Skills Usage

## SKILLS ARCHITECTURE

The project uses a modular "Skills" system located in the `skills/` folder.

Skills are **specialized execution modules** for:
- SEO optimization
- Schema generation
- Data transformation
- Reusable complex logic

------------------------------------------------------------
1. SKILL DISCOVERY (TOKEN-EFFICIENT RULE)
------------------------------------------------------------
- DO NOT load or consider all skills by default.
- Only consider skills when the task clearly requires specialized logic.

Examples of triggering intent:
- "optimize SEO content"
- "generate schema"
- "process trekking data"
- "extract FAQs"

👉 If no clear match → proceed normally without skills.

------------------------------------------------------------
2. SKILL USAGE PRIORITY (CONDITIONAL)
------------------------------------------------------------
- If a relevant skill is clearly applicable:
  → USE the skill

- If the task is simple or one-off:
  → DO NOT use a skill

- Avoid forcing skill usage when unnecessary.

------------------------------------------------------------
3. SKILL MATCHING STRATEGY
------------------------------------------------------------
- Match user intent with skill purpose using:
    - Skill name
    - Skill description

- Load ONLY the most relevant skill
  ❌ Do NOT load multiple skills unless explicitly required

------------------------------------------------------------
4. AVOID TOKEN WASTE (CRITICAL)
------------------------------------------------------------
- Do NOT:
  ❌ Scan all skills unnecessarily  
  ❌ Load unrelated skills  
  ❌ Chain multiple skills for simple tasks

- Prefer:
  ✅ Minimal context  
  ✅ Single-skill execution  
  ✅ Direct answers when possible

------------------------------------------------------------
5. SKILL VS DIRECT EXECUTION
------------------------------------------------------------

Use skill when:
- Task is complex
- Task is reusable
- Task involves transformation (JSON → schema, SEO optimization)

Do NOT use skill when:
- Task is simple explanation
- Task is UI-only
- Task is one-time logic

------------------------------------------------------------
6. SEO & ENTITY TASKS (HIGH PRIORITY)
------------------------------------------------------------
For trekking-related pages (EBC, ABC):

Prefer skills for:
- SEO content optimization
- JSON → JSON-LD schema generation
- FAQ structuring
- Metadata generation

These are high-value skill use cases.

------------------------------------------------------------
7. SKILL CREATION GUIDANCE
------------------------------------------------------------
Suggest creating a new skill ONLY if:
- Same logic appears multiple times
- Task is complex and repeatable

Do NOT suggest skills for trivial logic.

------------------------------------------------------------
8. BRAND & UI CONSISTENCY
------------------------------------------------------------
All outputs (with or without skills) must follow:

- Himalayan Serenity Palette
- Clean, premium layout
- Accessible and responsive design

------------------------------------------------------------
9. FINAL PRINCIPLE
------------------------------------------------------------
Skills are optional accelerators, not mandatory steps.

👉 Use them when they add value  
👉 Skip them when they don’t