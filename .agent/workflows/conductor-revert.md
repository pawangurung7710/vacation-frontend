---
description: Reverts a track, phase, or task by analyzing git history
---

# Conductor Revert Workflow

This workflow helps you safely revert work tracked by Conductor.

## Prerequisites
- Conductor must be set up
- Git repository must exist
- `conductor/tracks.md` must exist

## Workflow Steps

### Step 1: Verify Setup
Check if `conductor/tracks.md` exists and is not empty.
- If missing/empty: HALT and announce "Run `/conductor-setup` or restore tracks.md"

### Step 2: Interactive Target Selection

2.1. **Check for User-Provided Target:**
   - Did user specify target? (e.g., `/conductor-revert track <track_id>`)
   - If YES: Go to Path A (Direct Confirmation)
   - If NO: Go to Path B (Guided Selection Menu)

2.2. **PATH A: Direct Confirmation**
   - Find specified track/phase/task in tracks.md or plan.md
   - Ask: "You asked to revert [Track/Phase/Task]: '[Description]'. Is this correct?"
     ```
     A) Yes
     B) No
     ```
   - If "Yes": Set as `target_intent` and go to Step 3
   - If "No": Ask clarifying questions to find correct item

2.3. **PATH B: Guided Selection Menu**
   
   2.3.1. **Identify Revert Candidates:**
   - Read `conductor/tracks.md`
   - Read ALL `conductor/tracks/*/plan.md` files
   - **Prioritize In-Progress Items:**
     - Find ALL items marked `[~]` (Tracks, Phases, Tasks)
   - **Fallback to Completed:**
     - If NO in-progress items, find **5 most recently completed** items (`[x]`)
   
   2.3.2. **Present Hierarchical Menu:**
   
   **If in-progress items found:**
   > "I found multiple in-progress items. Please choose which to revert:
   >
   > Track: user_profile_20251208
   >   1) [Phase] Implement Backend API
   >   2) [Task] Update user model
   >
   > Track: auth_ui_20251208
   >   3) [Task] Create login form
   >
   > 4) A different Track, Task, or Phase"
   
   **If only completed items:**
   > "No items are in progress. Please choose a recently completed item to revert:
   >
   > Track: user_profile_20251208
   >   1) [Phase] Foundational Setup
   >   2) [Task] Initialize React application
   >
   > Track: auth_ui_20251208
   >   3) [Task] Create login form
   >
   > 4) A different Track, Task, or Phase"
   
   2.3.3. **Process User Choice:**
   - If user selects 1, 2, or 3: Set as `target_intent` and go to Step 3
   - If user selects 4 or other:
     - Ask clarifying questions:
       - "What is the name or ID of the track?"
       - "Can you describe the task to revert?"
     - Once identified, loop back to Path A for confirmation
   
   2.3.4. **Halt on Failure:**
   - If NO items found to present, announce and halt

### Step 3: Git Reconciliation & Verification

3.1. **Identify Implementation Commits:**
   - Find primary SHAs for all tasks/phases in target's `plan.md`
   - Look for commit SHAs appended to completed tasks (e.g., `[x] Task: Description [abc1234]`)
   - **Handle "Ghost" Commits:**
     - If SHA from plan not found in git history:
       - Announce: "Commit [SHA] not found (possibly rewritten)"
       - Search git log for similar commit message
       - Ask user: "Is this the replacement commit? (yes/no)"
       - If "no", halt

3.2. **Identify Plan-Update Commits:**
   - For each implementation commit, find the corresponding plan update commit
   - Use: `git log --grep="conductor(plan)" --all`
   - Find commit that modified `plan.md` AFTER implementation commit

3.3. **Identify Track Creation Commit (Track Revert Only):**
   - **ONLY if user wants to revert entire track:**
   - Search git log: `git log -- conductor/tracks.md`
   - Find commit that first added `## [ ] Track: <Description>` line
   - Add this SHA to revert list

3.4. **Compile Final List:**
   - Combine all SHAs to be reverted
   - Check for complexities:
     - Merge commits
     - Cherry-pick duplicates
   - Warn user about any complications

### Step 4: Final Execution Plan Confirmation

4.1. **Summarize Findings:**
   > "I have analyzed your request. Here is the plan:
   >
   > **Target:** Revert Task '[Task Description]'
   > **Commits to Revert:** 2
   >   - abc1234 ('feat: Add user profile')
   >   - def5678 ('conductor(plan): Mark task complete')
   > **Action:** I will run `git revert` on these commits in reverse order."

4.2. **Final Go/No-Go:**
   > "**Do you want to proceed? (yes/no)**"
   ```
   A) Yes
   B) No
   ```
   - If "Yes": Go to Step 5
   - If "No": Ask clarifying questions to adjust plan

### Step 5: Execution & Verification

5.1. **Execute Reverts:**
   ```bash
   # Start from most recent, work backward
   git revert --no-edit <most_recent_sha>
   git revert --no-edit <next_sha>
   ...
   ```

5.2. **Handle Conflicts:**
   - If any revert fails due to merge conflict:
     - HALT immediately
     - Provide clear instructions:
       > "Merge conflict detected during revert of commit [SHA].
       > Please:
       > 1. Resolve conflicts in the listed files
       > 2. Run: git add <resolved_files>
       > 3. Run: git revert --continue
       > 4. Then re-run this workflow to continue"

5.3. **Verify Plan State:**
   - Read relevant `plan.md` file(s)
   - Verify reverted item status is correctly reset
   - If NOT correct:
     - Perform file edit to fix status
     - Commit correction:
       ```bash
       git add conductor/tracks/*/plan.md
       git commit -m "conductor(plan): Fix plan state after revert"
       ```

5.4. **Announce Completion:**
   > "Revert complete. The following work has been undone:
   > - [List reverted items]
   > Plan synchronized and up to date."

## Notes
- **Critical:** Always get user confirmation before reverting
- Handle non-linear git histories (rebases, squashes)
- Validate ALL tool calls
- If errors occur, halt and report clearly
- Reverting is destructive - be extremely careful
- Git notes may contain additional task information
- Consider checking git notes with: `git notes show <commit>`
