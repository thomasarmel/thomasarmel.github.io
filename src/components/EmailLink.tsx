import React, { useEffect, useState } from 'react';

export default function EmailLink(): JSX.Element {
    const [mailto, setMailto] = useState<string | null>(null);

    useEffect(() => {
        const user = 'contact';
        const domain = 'thomasarmel';
        const tld = 'fr';

        const email = `${user}@${domain}.${tld}`;
        setMailto(`mailto:${email}`);
    }, []);

    return (
        <a
            href={mailto ?? '#'}
            aria-label="Send an email to contact at thomasarmel dot fr"
        >
            contact<span aria-hidden>@</span>thomasarmel<span aria-hidden>.fr</span>
        </a>
    );
}
