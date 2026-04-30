# Antigravity Native Skills Behavior

This document serves as a reference for how the Antigravity AI agent handles "Skills" inside this workspace, and why custom global rules enforcing skill usage are unnecessary.

## 1. Native Built-in Skill Detection
Antigravity does **not** need a custom global rule (like a `skills.md` injected prompt) to know how or when to use skills. This capability is hardwired into its core system prompt.

Whenever a task is given, the agent automatically receives the **names and descriptions** of all skills located in the `.agent/skills/` directory.

## 2. Automatic, Token-Efficient Execution
The core system enforces a strict procedural rule:
> *"If a skill seems relevant to your current task, you MUST use the `view_file` tool on the SKILL.md file to read its full instructions before proceeding."*

This means:
- **No Token Waste:** The agent does not preload the full text of all 13 skills into every conversation. That would waste massive amounts of context limits.
- **Intent Matching:** If you ask the agent to "Optimize this page for SEO," it natively scans the brief descriptions of its available skills, identifies `seo-content-optimizer`, and then reads that specific file *only*.

## 3. Best Practices for Developers
- **Keep Global Rules Lean:** Do not put skill-triggering rules in your `coding-standard.md` or global user rules. Every word in those global files is injected into every single message, eating up tokens.
- **Put Domain Knowledge Inside the Skill:** If you have specific SEO rules for Nepal (e.g., handling TIMS cards, helicopter evacuation schemas), put them *inside* `.agent/skills/seo-content-optimizer/SKILL.md`. The agent will read them when it needs them.
- **No Manual Invocation Needed:** You do not need to explicitly say "Use the seo-content-optimizer skill." Just describe your task naturally, and the system handles the routing.

## Summary
By removing redundant custom skill rules and relying on Antigravity's native routing, you preserve maximum token capacity. This ensures the AI remains fast, has better memory for your actual code, and doesn't get confused by conflicting meta-instructions.
