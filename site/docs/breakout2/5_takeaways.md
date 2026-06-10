---
sidebar_position: 5
---

# Key Takeaways

After working through both breakouts, you've experienced two approaches to dashboarding:

|  | Manual (Breakout 1) | AI-Assisted (Breakout 2) |
| --- | --- | --- |
| **Panel configuration** | Edit each panel individually, step by step | Describe the change in one sentence |
| **Bulk changes** | Repeat the same steps N times | One prompt covers all panels |
| **Query expertise needed** | Must know PromQL/LogQL syntax | Describe what you want in plain English |
| **Accessibility** | Research best practices, apply override by override | Ask for accessible design, review the result |
| **Discovering gaps** | Requires deep familiarity with available metrics | Ask Assistant what's available but not visualized |
| **Best for** | Learning how Grafana works under the hood | Speed, iteration, and tasks beyond your current expertise |

**The bottom line:** Manual dashboarding skills and AI-assisted workflows aren't competing approaches; they're complementary. Understanding how panels, queries, and thresholds work (Breakout 1) makes you a better collaborator with Assistant (Breakout 2). And Assistant lets you operate at a scale and speed that manual work can't match.

## Troubleshooting

**Assistant isn't responding or seems stuck.**
Try refreshing the page and reopening the Assistant sidebar. Make sure you're on the dashboarding version of Assistant.

**Assistant says it can't find a panel.**
Use the exact panel name as it appears on the dashboard. If you renamed panels earlier in this exercise, use the new name.

**Changes don't appear immediately.**
Some changes may require you to save the dashboard and reload the page. Click *Save Dashboard* and refresh.

**"No data" on a new panel.**
If Assistant creates a new panel that shows no data, the query may reference a metric or label that doesn't exist in your environment. Ask Assistant: "This panel shows no data. Can you check the query and fix it?"
