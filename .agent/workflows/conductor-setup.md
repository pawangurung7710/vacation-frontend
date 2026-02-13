---
description: Scaffolds the project and sets up the Conductor environment
---

# Conductor Setup Workflow

This workflow initializes a project with the Conductor methodology for context-driven development.

## Prerequisites
- Git repository (will be initialized if not present)
- Write access to project directory

## Workflow Steps

### Step 1: Check for Resumed Setup
Check if `conductor/setup_state.json` exists to determine if this is a resumed setup.

**If state file exists:**
- Read `last_successful_step` value
- Resume from the appropriate section based on the value
- Skip already completed steps

**If state file does NOT exist:**
- This is a new setup, proceed to Step 2

### Step 2: Provide Overview
Present the initialization overview to the user:
> "Welcome to Conductor. I will guide you through the following steps:
> 1. **Project Discovery:** Analyze if this is a new or existing project
> 2. **Product Definition:** Define product vision, guidelines, and tech stack
> 3. **Configuration:** Select code style guides and customize workflow
> 4. **Track Generation:** Define initial track and generate detailed plan
>
> Let's get started!"

### Step 3: Detect Project Maturity
Classify the project as **Brownfield** (existing) or **Greenfield** (new):

**Brownfield Indicators** (if ANY exist, classify as Brownfield):
- `.git`, `.svn`, or `.hg` directory exists
- Uncommitted changes in git (check with `git status --porcelain`)
- Dependency manifests exist (package.json, pom.xml, requirements.txt, go.mod)
- Source code directories exist (src/, app/, lib/)

**Greenfield Condition:**
- NONE of the above indicators are found
- Directory is empty or contains only generic docs (single README.md)

### Step 4A: Brownfield Project Initialization (if applicable)
If Brownfield project detected:

4A.1. **Pre-analysis Confirmation:**
   - Inform user that existing project detected
   - Warn if uncommitted changes exist
   - Request permission for read-only scan
   - If denied, halt and await instructions

4A.2. **Code Analysis:**
   - Announce code analysis
   - Prioritize README.md first
   - Analyze other relevant files for project understanding

4A.3. **File Triage:**
   - Ignore large/irrelevant directories (node_modules/, .m2/, venv/, build/, dist/, target/, .idea/, .vscode/)
   - List files with sizes
   - For files >1MB, read only first and last 20 lines

4A.4. **Extract Project Context:**
   - Identify programming language and frameworks
   - Infer architecture (Monorepo, Microservices, MVC)
   - Summarize project goal from README

Proceed to Step 5.

### Step 4B: Greenfield Project Initialization (if applicable)
If Greenfield project detected:

4B.1. Initialize git repository:
   ```bash
   git init
   ```

4B.2. Ask user: "What do you want to build?"
   - WAIT for user response
   - Create `conductor` directory
   - Create `conductor/setup_state.json` with: `{"last_successful_step": ""}`
   - Write user's response to `conductor/product.md` under `# Initial Concept`

Proceed to Step 5.

### Step 5: Generate Product Guide (Interactive)
**State file update after completion:** `{"last_successful_step": "2.1_product_guide"}`

5.1. Announce creation of `product.md`

5.2. Ask questions sequentially (max 5 questions), one at a time:
   - Topics: Target users, goals, features
   - For each question, provide 3 suggested answers
   - **Question Types:**
     - **Additive** (multiple answers): Add "(Select all that apply)"
     - **Exclusive Choice** (single answer): No "select all" text
   - **Options format (vertical list):**
     ```
     A) [Option A]
     B) [Option B]
     C) [Option C]
     D) [Type your own answer]
     E) [Autogenerate and review product.md]
     ```
   - If user selects E, stop questions and generate document
   - Brownfield: Ask context-aware questions based on code analysis

5.3. Draft `product.md` content
   - Use ONLY user's selected answers (ignore unselected options)
   - Expand on answers to create comprehensive document

5.4. User confirmation loop:
   > "I've drafted the product guide. Please review:
   > ```markdown
   > [content]
   > ```
   > What would you like to do?
   > A) Approve
   > B) Suggest Changes"
   
   - Loop until approved

5.5. Write approved content to `conductor/product.md` (append to existing `# Initial Concept`)

5.6. Update state file: `{"last_successful_step": "2.1_product_guide"}`

### Step 6: Generate Product Guidelines (Interactive)
**State file update after completion:** `{"last_successful_step": "2.2_product_guidelines"}`

6.1. Announce creation of `product-guidelines.md`

6.2. Ask questions sequentially (max 5 questions):
   - Topics: Prose style, brand messaging, visual identity
   - Same options format as Step 5
   - Option E: "Autogenerate and review product-guidelines.md"

6.3. Draft and confirm using same process as Step 5

6.4. Write to `conductor/product-guidelines.md`

6.5. Update state file: `{"last_successful_step": "2.2_product_guidelines"}`

### Step 7: Generate Tech Stack (Interactive)
**State file update after completion:** `{"last_successful_step": "2.3_tech_stack"}`

7.1. Announce tech stack definition

7.2. Ask questions sequentially (max 5 questions):
   - Topics: Languages, frameworks, databases
   - For **Brownfield projects:**
     - State inferred tech stack from code analysis
     - Ask for confirmation:
       ```
       A) Yes, this is correct
       B) No, I need to provide the correct tech stack
       ```
   - For **Greenfield projects:**
     - Use standard question format with option E: "Autogenerate and review tech-stack.md"

7.3. Draft and confirm

7.4. Write to `conductor/tech-stack.md`

7.5. Update state file: `{"last_successful_step": "2.3_tech_stack"}`

### Step 8: Select Code Style Guides (Interactive)
**State file update after completion:** `{"last_successful_step": "2.4_code_styleguides"}`

8.1. List available guides:
   ```bash
   ls ~/.gemini/extensions/conductor/templates/code_styleguides/
   ```
   (Or use equivalent path for Antigravity)

8.2. **For Greenfield:**
   - Recommend guides based on tech stack
   - Ask:
     ```
     A) Include the recommended style guides
     B) Edit the selected set
     ```
   - If B, present numbered list for selection

8.3. **For Brownfield:**
   - Announce inferred guides
   - Ask:
     ```
     A) Proceed with suggested guides
     B) Add more guides
     ```

8.4. Copy selected guides:
   ```bash
   mkdir -p conductor/code_styleguides
   cp [selected_files] conductor/code_styleguides/
   ```

8.5. Update state file: `{"last_successful_step": "2.4_code_styleguides"}`

### Step 9: Select Workflow (Interactive)
**State file update after completion:** `{"last_successful_step": "2.5_workflow"}`

9.1. Copy default workflow:
   ```bash
   cp ~/.gemini/extensions/conductor/templates/workflow.md conductor/workflow.md
   ```

9.2. Ask: "Use default workflow or customize?"
   Default includes:
   - 80% test coverage
   - Commit after every task
   - Git Notes for task summaries
   ```
   A) Default
   B) Customize
   ```

9.3. If B (Customize), ask:
   - **Q1:** "Change test coverage percentage from 80%?"
     - A) No (Keep 80%)
     - B) Yes (Type new percentage)
   - **Q2:** "Commit after each task or each phase?"
     - A) After each task (Recommended)
     - B) After each phase
   - **Q3:** "Use git notes or commit message for task summary?"
     - A) Git Notes (Recommended)
     - B) Commit Message

9.4. Update `conductor/workflow.md` based on responses

9.5. Update state file: `{"last_successful_step": "2.5_workflow"}`

### Step 10: Finalization
Summarize all created files and announce transition to initial track generation.

### Step 11: Generate Product Requirements (Greenfield Only)
Ask sequential questions (max 5) about:
- User stories
- Functional requirements
- Non-functional requirements

Use same interactive format with option E: "Auto-generate and move to next step"

### Step 12: Propose Initial Track
12.1. Announce track proposal

12.2. Generate single track title based on context:
   - **Greenfield:** Usually MVP features
     > "To create the MVP, I suggest:
     > - Build core functionality for [feature]"
   - **Brownfield:** Maintenance and enhancements
     > "For the first track, I suggest:
     > - Create/improve [specific feature]"

12.3. Request user confirmation
   - If declined, ask for clarification on what track to start with

### Step 13: Convert Initial Track to Artifacts
**State file update after completion:** `{"last_successful_step": "3.3_initial_track_generated"}`

13.1. Create `conductor/tracks.md`:
   ```markdown
   # Project Tracks
   
   This file tracks all major tracks for the project.
   
   ---
   
   ## [ ] Track: <Track Description>
   *Link: [./conductor/tracks/<track_id>/](./conductor/tracks/<track_id>/)*
   ```

13.2. Generate track artifacts:
   - Create track ID: `shortname_YYYYMMDD`
   - Create directory: `conductor/tracks/<track_id>/`
   - Create `metadata.json`:
     ```json
     {
       "track_id": "<track_id>",
       "type": "feature",
       "status": "new",
       "created_at": "YYYY-MM-DDTHH:MM:SSZ",
       "updated_at": "YYYY-MM-DDTHH:MM:SSZ",
       "description": "<description>"
     }
     ```
   - Generate and write `spec.md`
   - Generate and write `plan.md`:
     - MUST follow workflow from `conductor/workflow.md`
     - If "Phase Completion Verification Protocol" exists, add meta-task to each phase:
       `- [ ] Task: Conductor - User Manual Verification '<Phase Name>' (Protocol in workflow.md)`

13.3. Update state file: `{"last_successful_step": "3.3_initial_track_generated"}`

### Step 14: Final Announcement
14.1. Announce setup complete

14.2. Commit all conductor files:
   ```bash
   git add conductor/
   git commit -m "conductor(setup): Add conductor setup files"
   ```

14.3. Inform user to run `/conductor:implement` (or this workflow's implement equivalent) to begin work

## Notes
- Always validate tool call success before proceeding
- If any step fails, halt and await user instructions
- Use "flash" model for all operations
- User confirmation required at all checkpoints
