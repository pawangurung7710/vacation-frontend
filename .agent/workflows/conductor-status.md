---
description: Displays the current progress of the tracks file and active tracks
---

# Conductor Status Workflow

This workflow provides a status overview of your Conductor project.

// turbo

## Prerequisites
- Conductor must be set up
- `conductor/tracks.md` must exist

## Workflow Steps

### Step 1: Verify Setup
1.1. Check if `conductor/tracks.md` exists
   - If NOT exists: HALT and announce "Run `/conductor-setup` to set up the project"

1.2. Check if `conductor/tracks.md` is not empty
   - If empty: HALT and announce "Run `/conductor-setup` or restore conductor/tracks.md"

1.3. Check for required files:
   - `conductor/tech-stack.md`
   - `conductor/workflow.md`
   - `conductor/product.md`
   - If ANY missing: HALT and announce "Run `/conductor-setup`"

### Step 2: Read Project Plans
2.1. Read `conductor/tracks.md`

2.2. List all tracks:
   ```bash
   ls conductor/tracks
   ```

2.3. For each track directory, read:
   - `conductor/tracks/<track_id>/plan.md`

### Step 3: Parse and Summarize
3.1. **Parse Tracks File:**
   - Split by `---` separator
   - For each track, extract:
     - Status: `[ ]` (pending), `[~]` (in progress), `[x]` (completed)
     - Track description
     - Track ID from link

3.2. **Parse Plan Files:**
   - Identify phases (top-level headings)
   - Identify tasks and sub-tasks (bullet points)
   - Check status markers: `[ ]`, `[~]`, `[x]`

3.3. **Calculate Statistics:**
   - Total tracks
   - Tracks by status (pending/in-progress/completed)
   - Total phases across all tracks
   - Total tasks across all tracks
   - Tasks by status (pending/in-progress/completed)

3.4. **Identify Current Work:**
   - Find track marked `[~]`
   - Within that track's plan, find phase marked `[~]`
   - Within that phase, find task marked `[~]`

3.5. **Identify Next Action:**
   - Find first task marked `[ ]` (pending)

3.6. **Identify Blockers:**
   - Search for items marked as "BLOCKED" or "BLOCKER"

### Step 4: Present Status Overview
Present comprehensive status report:

```
========================================
CONDUCTOR PROJECT STATUS
========================================
Current Date/Time: [timestamp]

PROJECT OVERVIEW:
- Total Tracks: [X]
  - Pending: [X]
  - In Progress: [X]
  - Completed: [X]
- Total Phases: [X]
- Total Tasks: [X]

PROGRESS:
- Completed: [X]/[total] ([percentage]%)
- In Progress: [X]
- Pending: [X]

CURRENT STATUS: [On Track / Behind Schedule / Blocked]

ACTIVE WORK:
- Track: [track description]
- Phase: [phase name]
- Task: [task description]

NEXT ACTION:
- [Next pending task description]

BLOCKERS:
- [List any blockers, or "None"]

RECENT ACTIVITY:
[Optional: Show recent commits/checkpoints if available]
========================================
```

## Example Output
```
========================================
CONDUCTOR PROJECT STATUS
========================================
Current Date/Time: 2025-12-20 15:00:00

PROJECT OVERVIEW:
- Total Tracks: 2
  - Pending: 0
  - In Progress: 1
  - Completed: 1
- Total Phases: 5
- Total Tasks: 23

PROGRESS:
- Completed: 18/23 (78%)
- In Progress: 2
- Pending: 3

CURRENT STATUS: On Track

ACTIVE WORK:
- Track: Caching cleanup and optimization
- Phase: Phase 3 - Verification
- Task: Verify Application Startup

NEXT ACTION:
- Verify Caching Functionality

BLOCKERS:
- None

========================================
```

## Notes
- Always validate file reads
- If errors occur, report and halt
- Status calculations should be accurate
- Present clear, readable format
- Use color/formatting if terminal supports it
