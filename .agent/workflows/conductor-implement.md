---
description: Executes the tasks defined in the specified track's plan
---

# Conductor Implement Workflow

This workflow executes tasks from a track's plan following the project workflow.

// turbo-all

## Prerequisites
- Conductor must be set up
- At least one track must exist in `conductor/tracks.md`

## Workflow Steps

### Step 1: Setup Verification
Check for required files:
- `conductor/tech-stack.md`
- `conductor/workflow.md`
- `conductor/product.md`

**If ANY missing:** Halt and announce "Please run `/conductor-setup`"

### Step 2: Track Selection
2.1. **Check for User Input:**
   - Did user provide track name? (e.g., `/conductor-implement <track_description>`)

2.2. **Parse Tracks File:**
   - Read `conductor/tracks.md`
   - Split by `---` separator
   - For each section extract:
     - Status: `[ ]`, `[~]`, `[x]`
     - Description from `##` heading
     - Link to track folder
   - **If NO tracks found:** Announce "Tracks file empty or malformed" and HALT

2.3. **Select Track:**
   
   **If track name provided:**
   - Perform case-insensitive match against track descriptions
   - If unique match found: "I found track '<description>'. Is this correct?"
   - If no/ambiguous match: Inform user, suggest next available track
   
   **If NO track name provided:**
   - Find first track NOT marked `[x]` (completed)
   - If found: Announce "Automatically selecting: '<description>'"
   - If NO incomplete tracks: Announce "All tasks completed!" and HALT

2.4. **Handle No Selection:**
   If no track selected, await user instructions

### Step 3: Update Track Status to In Progress
- Find track heading in `conductor/tracks.md`
- Change `## [ ] Track:` to `## [~] Track:`
- Write updated file

### Step 4: Load Track Context
4.1. **Identify Track Folder:**
   - Extract `<track_id>` from track link in tracks file

4.2. **Read Required Files:**
   - `conductor/tracks/<track_id>/plan.md`
   - `conductor/tracks/<track_id>/spec.md`
   - `conductor/workflow.md`

4.3. **Error Handling:**
   - If ANY file fails to read, STOP and inform user

### Step 5: Execute Tasks
5.1. **Announce:**
   "I will now execute tasks from the track's plan.md by following workflow.md procedures."

5.2. **Iterate Through Each Task:**
   - Loop through tasks in `plan.md` one by one
   - For each task:
     - **Follow workflow.md "Task Workflow" section as SINGLE SOURCE OF TRUTH**
     - Execute all steps defined in workflow (implementation, testing, committing)
     - This typically includes:
       1. Mark task `[~]` in plan.md
       2. Write failing tests (Red Phase)
       3. Implement to pass tests (Green Phase)
       4. Refactor (optional)
       5. Verify coverage
       6. Document deviations if needed
       7. Commit code changes
       8. Attach task summary with git notes
       9. Record task commit SHA in plan.md
       10. Mark task `[x]` with commit SHA
       11. Commit plan update
       
     - **If task completes a phase:**
       - Execute "Phase Completion Verification and Checkpointing Protocol" from workflow.md
       - This includes:
         - Ensure test coverage for phase
         - Execute automated tests with debugging
         - Propose detailed manual verification plan
         - Await user confirmation
         - Create checkpoint commit
         - Attach verification report via git notes
         - Record phase checkpoint SHA in plan.md
         - Commit plan update

### Step 6: Finalize Track
6.1. After ALL tasks in local `plan.md` are complete:
   - Find track in `conductor/tracks.md`
   - Change `## [~] Track:` to `## [x] Track:`
   - Write updated file

6.2. Announce: "Track is fully complete and tracks file updated"

### Step 7: Synchronize Project Documentation
**ONLY execute if track status is `[x]` (completed)**

7.1. **Announce Synchronization:**
   "Now synchronizing project-level documentation with completed track specifications."

7.2. **Load Files:**
   - `conductor/tracks/<track_id>/spec.md`
   - `conductor/product.md`
   - `conductor/product-guidelines.md`
   - `conductor/tech-stack.md`

7.3. **Analyze and Update product.md:**
   - Analyze spec.md for new features/changes
   - Determine if product description needs update
   - If YES:
     - Generate proposed changes
     - Present to user in diff format
     - Ask: "Do you approve these changes? (yes/no)"
     - Only proceed with explicit "yes"
     - Update file and record change

7.4. **Analyze and Update tech-stack.md:**
   - Determine if tech stack changed
   - If YES:
     - Generate proposed changes
     - Present in diff format
     - Ask: "Do you approve? (yes/no)"
     - Only proceed with explicit "yes"
     - Update file and record change

7.5. **Analyze and Update product-guidelines.md (RARE):**
   - **CRITICAL WARNING:** Only for significant strategic shifts (rebrand, engagement philosophy change)
   - **NOT for routine features/bugs**
   - Only propose if spec.md EXPLICITLY describes branding/voice/tone changes
   - If conditions met:
     - Generate proposed changes
     - Present with WARNING: "This affects core product guidelines. Review carefully:"
     - Ask: "Do you approve these critical changes? (yes/no)"
     - Only proceed with explicit "yes"
     - Update file and record change

7.6. **Final Report:**
   Announce completion and summarize:
   - Which files were changed
   - Which files weren't affected
   - Example: "Changes made to product.md. No changes needed for tech-stack.md or product-guidelines.md."

### Step 8: Track Cleanup
**ONLY execute after track implementation AND documentation sync complete**

8.1. **Ask User:**
   > "Track '<description>' is now complete. What would you like to do?
   > A) Archive: Move to conductor/archive/ and remove from tracks file
   > B) Delete: Permanently delete folder and remove from tracks file
   > C) Skip: Leave it in tracks file"

8.2. **Handle Response:**
   
   **If A (Archive):**
   ```bash
   mkdir -p conductor/archive
   mv conductor/tracks/<track_id> conductor/archive/<track_id>
   ```
   - Remove track section from `conductor/tracks.md`
   - Announce: "Track archived successfully"
   
   **If B (Delete):**
   - **CRITICAL WARNING:** Ask final confirmation
     > "WARNING: This will permanently delete the track folder. Cannot be undone.
     > Are you sure? (yes/no)"
   - If "yes":
     ```bash
     rm -rf conductor/tracks/<track_id>
     ```
     - Remove from tracks.md
     - Announce: "Track permanently deleted"
   - If "no" or anything else:
     - Announce: "Deletion cancelled"
   
   **If C (Skip) or other:**
   - Announce: "Completed track will remain in tracks file"

## Notes
- Always validate tool calls
- If failures occur, halt and await instructions
- Follow workflow.md as single source of truth for task execution
- User confirmation required for:
  - Manual verification after each phase
  - Documentation updates
  - Track deletion
- Git notes are used for attaching task summaries and verification reports
