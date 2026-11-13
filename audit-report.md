# Amazon India – Accessibility Audit Report

## 1. Website Details

- Website: https://www.amazon.in/
- Tool: Google Lighthouse
- Device: Desktop
- Audit Category: Accessibility
- Accessibility Score: 89/100

## 2. Accessibility Findings

### Issue 1: ARIA Attributes Mismatch
- Reference: WCAG 4.1.2
- Severity: Medium (provisional)
- Evidence: Lighthouse reported ARIA attributes that do not match their roles.
- Impact: Screen reader users may receive incorrect information.
- Recommendation: Use valid ARIA attributes for the correct roles.

### Issue 2: Links Without Discernible Names
- Reference: WCAG 4.1.2
- Severity: Medium (provisional)
- Evidence: Lighthouse identified the element `a.nav-imageHref`.
- Impact: Screen reader users may not understand the link purpose.
- Recommendation: Add meaningful accessible names to links.

### Issue 3: Redundant Image Alt Text
- Reference: WCAG 1.1.1
- Severity: Low (provisional)
- Evidence: Category images contain alternative text that repeats adjacent text.
- Impact: Screen reader users may hear repeated descriptions.
- Recommendation: Use empty alt text for decorative images or meaningful alternative text where needed.

### Issue 4: Small Touch Targets
- Reference: WCAG 2.5.8 (verify applicable exceptions)
- Severity: Medium (provisional)
- Evidence: Lighthouse identified navigation controls with insufficient size or spacing.
- Impact: Users may find small controls difficult to activate.
- Recommendation: Increase target size or spacing where required.

### Issue 5: Heading Order
- Reference: WCAG 1.3.1 (manual review required)
- Severity: Low (provisional)
- Evidence: Lighthouse reported that heading elements are not in sequentially descending order.
- Impact: Screen reader users may find the page structure difficult to understand.
- Recommendation: Organize headings in a logical hierarchy.

## 3. Audit Summary

- Lighthouse Accessibility Score: 89/100
- Findings identified: 5
- Automated audit completed: Yes
- Manual keyboard testing: To be documented separately
- Remediation: Pending

## 4. Conclusion

The audit identified five accessibility findings on the Amazon India homepage. These findings should be reviewed and corrected where applicable to improve accessibility for all users.

Note: Automated Lighthouse findings require manual verification before final severity and compliance conclusions.


## 5. Evidence Screenshots

The following screenshots provide evidence for the five accessibility issues identified during the Amazon India website audit.

### Issue 1: ARIA Attributes
![ARIA attributes issue](evidence/01.internship.png)

### Issue 2: Missing Alternative Text
![Missing alt text](evidence/02.internship.png)

### Issue 3: Redundant Alternative Text
![Redundant alt text](evidence/03.internship.png)

### Issue 4: Touch Target Size
![Touch target issue](evidence/04.internship.png)

### Issue 5: Heading Order
![Heading order issue](evidence/05.internship.png)
