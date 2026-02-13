---
description: "Plans a track, generates track-specific spec documents and updates the tracks file"
---

# Conductor New Track Workflow

This workflow guides you through creating a new feature or bug track with spec and plan.

## Prerequisites
- Conductor must be set up (run `/conductor-setup` first)
- Required files must exist:
  - `conductor/tech-stack.md`
  - `conductor/workflow.md`
  - `conductor/product.md`

## Workflow Steps

### Step 1: Setup Verification
Check for required files in `conductor/` directory:
- `tech-stack.md`
- `workflow.md`
- `product.md`

**If ANY are missing:**
- Halt operation
- Announce: "Conductor is not set up. Please run `/conductor-setup`"
- DO NOT proceed

### Step 2: Load Project Context
Read and understand content of all `conductor/` directory files to provide context-aware questions.

### Step 3: Get Track Description
**If user provided description (as argument):**
- Use the provided description

**If NO description provided:**
- Ask: "Please provide a brief description of the track (feature, bug fix, chore, etc.)"
- Wait for response
- Use response as track description

###Human: Step 4: Infer Track Type
Analyze description to determine:
- **Feature** - new functionality
- **Something Else** - Bug, Chore, Refactor, etc.

Do NOT ask user to classify - infer automatically.

### Step 5: Interactive Specification Generation (spec.md)
5.1. Announce:
   > "I'll now guide you through questions to build a comprehensive specification (spec.md) for this track."

5.2. **Questioning Phase** (ask sequentially, ONE at a time):
   
   **General Guidelines:**
   - Refer to `product.md`, `tech-stack.md` for context-aware questions
   - Provide brief explanation and examples
   - Present 2-3 options (A, B, C) when possible
   - **Last option MUST be:** "D) Type your own answer"
   
   **Question Classification:**
   - **Additive** (multiple answers allowed): Add "(Select all that apply)"
   - **Exclusive Choice** (single answer): No "select all" text
   
   **If FEATURE:**
   - Ask 3-5 relevant questions
   - Examples: UI details, implementation approach, interactions, inputs/outputs
   - Tailor to specific feature (ask about missing details)
   
   **If SOMETHING ELSE:**
   - Ask 2-3 relevant questions
   - Examples: Reproduction steps (bugs), scope (chores), success criteria

5.3. **Draft spec.md:**
   Generate content with sections:
   - Overview
   - Functional Requirements
   - Non-Functional Requirements (if any)
   - Acceptance Criteria
   - Out of Scope

5.4. **User Confirmation:**
   > "I've drafted the specification. Please review:
   > ```markdown
   > [content]
   > ```
   > Does this accurately capture requirements? Suggest changes or confirm."
   
   Wait for feedback and revise until confirmed.

### Step 6: Interactive Plan Generation (plan.md)
6.1. Announce:
   > "Now I will create an implementation plan (plan.md) based on the specification."

6.2. **Generate Plan:**
   - Read confirmed `spec.md` content
   - Read `conductor/workflow.md`
   - Generate hierarchical `plan.md` with:
     - Phases
     - Tasks
     - Sub-tasks
   - **CRITICAL:** Structure MUST follow workflow methodology (e.g., TDD: "Write Tests" then "Implement")
   - Use `[ ]` status markers for all tasks/sub-tasks
   - **CRITICAL:** Check if "Phase Completion Verification and Checkpointing Protocol" exists in `workflow.md`
     - If YES, append to EACH phase: `- [ ] Task: Conductor - User Manual Verification '<Phase Name>' (Protocol in workflow.md)`

6.3. **User Confirmation:**
   > "I've drafted the implementation plan. Please review:
   > ```markdown
   > [content]
   > ```
   > Does this plan cover all necessary steps based on spec and workflow? Suggest changes or confirm."
   
   Wait for feedback and revise until confirmed.

### Step 7: Create Track Artifacts
7.1. **Check for Existing Track:**
   - List all tracks: `conductor/tracks/*/`
   - Extract short names from track IDs (`shortname_YYYYMMDD`)
   - If new track's proposed short name matches existing, HALT
   - Explain duplicate exists, suggest different name or resume existing

7.2. **Generate Track ID:**
   - Format: `shortname_YYYYMMDD`
   - Example: `dark_mode_20251220`
   - Store this ID for all subsequent steps

7.3. **Create Directory:**
   ```bash
   mkdir -p conductor/tracks/<track_id>/
   ```

7.4. **Create metadata.json:**
   ```json
   {
     "track_id": "<track_id>",
     "type": "feature",
     "status": "new",
     "created_at": "YYYY-MM-DDTHH:MM:SSZ",
     "updated_at": "YYYY-MM-DDTHH:MM:SSZ",
     "description": "<Initial user description>"
   }
   ```
   - Use actual values
   - Use current timestamp

7.5. **Write Files:**
   - Write confirmed spec to: `conductor/tracks/<track_id>/spec.md`
   - Write confirmed plan to: `conductor/tracks/<track_id>/plan.md`

### Step 8: Update Tracks File
8.1. Announce: "Updating the tracks file."

8.2. Append to `conductor/tracks.md`:
   ```markdown
   
   ---
   
   ## [ ] Track: <Track Description>
   *Link: [./conductor/tracks/<track_id>/](./conductor/tracks/<track_id>/)*
   ```
   (Use actual values)

### Step 9: Announce Completion
Inform user:
> "New track '<track_id>' has been created and added to the tracks file. 
> You can now start implementation by running `/conductor-implement`."

## Notes
- Always validate tool calls before proceeding
- If any step fails, halt and await instructions
- Ask questions ONE at a time, wait for response
- Confirm understanding after each answer
- Only use user's selected answers in final documents (ignore unselected options)
