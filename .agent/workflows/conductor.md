---
description: How to use Conductor for context-driven development
---

# Conductor - Context-Driven Development

Conductor enables **Context-Driven Development** following: **Context → Spec & Plan → Implement**.

## Available Workflows

Conductor has been replicated as Antigravity workflows. Use these workflows interchangeably with Gemini CLI:

### 1. `/conductor-setup`
**Initialize project** - Run once per project  
📄 [View Workflow](file:///C:/Users/mukes/.gemini/antigravity/global_workflows/conductor-setup.md)

Sets up:
- `conductor/product.md` - Product vision
- `conductor/product-guidelines.md` - Brand standards  
- `conductor/tech-stack.md` - Technology stack
- `conductor/workflow.md` - TDD workflow
- `conductor/code_styleguides/` - Code standards
- `conductor/tracks.md` - Track registry

### 2. `/conductor-newtrack`
**Start new feature/bug** - Create spec and plan  
📄 [View Workflow](file:///C:/Users/mukes/.gemini/antigravity/global_workflows/conductor-newtrack.md)

Creates:
- `conductor/tracks/<track_id>/spec.md` - Requirements
- `conductor/tracks/<track_id>/plan.md` - Implementation plan
- `conductor/tracks/<track_id>/metadata.json` - Track metadata

### 3. `/conductor-implement`
**Execute the plan** - Follows TDD workflow  
📄 [View Workflow](file:///C:/Users/mukes/.gemini/antigravity/global_workflows/conductor-implement.md)

Process:
1. Select next pending task
2. Follow TDD (Write Test → Fail → Implement → Pass)
3. Update plan.md status
4. Manual verification after each phase
5. Sync documentation when complete

### 4. `/conductor-status`
**Check progress** - View project status  
📄 [View Workflow](file:///C:/Users/mukes/.gemini/antigravity/global_workflows/conductor-status.md)

Shows:
- Tracks overview (pending/in-progress/completed)
- Current active work
- Next action needed
- Blockers

### 5. `/conductor-revert`
**Undo work** - Git-aware revert  
📄 [View Workflow](file:///C:/Users/mukes/.gemini/antigravity/global_workflows/conductor-revert.md)

Reverts:
- Entire tracks
- Specific phases
- Individual tasks

## Quick Start

```bash
# Setup (done)
/conductor-setup

# New feature
/conductor-newtrack "Add dark mode"

# Implement
/conductor-implement

# Check status
/conductor-status

# Undo work
/conductor-revert
```

## Integration

Works with existing workflows:
- `/ai-start-task` - General tasks
- `/conductor-newtrack` - Structured features
- `/ai-qa-verification` - Post-phase QA
- `/ai-git-push` - Push completed tracks

## Resources

- [Conductor Extension README](file:///C:/Users/mukes/.gemini/extensions/conductor/README.md)
