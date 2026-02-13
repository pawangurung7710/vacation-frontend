# Conductor Workflow: Vacation Nepal Trekking

This document defines the development workflow for the project.

## 1. Development Cycle
1. **Task Analysis:** Understand the specific task requirement within the current phase.
2. **Implementation:** Write code that adheres to the established `code_styleguides`.
3. **Verification:**
   - **Manual:** Check UI/UX against `product-guidelines.md`.
   - **Automated:** Run unit/integration tests (Target: 80% coverage).
4. **Commit:** Commit changes after EVERY task.
   - Format: `<type>(<scope>): <description>`
   - Example: `feat(itinerary): add altitude chart component`

## 2. Commit Strategy
- **Frequency:** Commit after each task is completed.
- **Summaries:** Use Git Notes to attach task-level summaries to the commit.

## 3. Phase Completion Verification Protocol
Before marking a phase as complete:
1. Ensure all tasks are checked in `plan.md`.
2. Verify build passes (`npm run build`).
3. Conduct a "User Manual Verification" (as defined in the workflow).

## 4. Documentation
- Update `tracks.md` and the track's `plan.md` as work progresses.
- Keep the `conductor/` directory up-to-date with any architecture or tech stack changes.
