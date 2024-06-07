import { locales } from 'nextra/locales';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const middleware = request => {

    if (request.nextUrl.pathname === '/authorize-discord') { 
        return NextResponse.redirect(new URL(`https://discord.com/oauth2/authorize?client_id=978658099474890793`))
    }

    if (request.nextUrl.pathname.startsWith('/library')) { 
        return NextResponse.redirect(new URL(`https://docs.wikisubmission.org${request.nextUrl.pathname}`))
    }

    if (request.nextUrl.pathname.startsWith('/appendix-')) {
        const appendixNumber = `${request?.nextUrl?.pathname?.split('-')[1] || '1'}`;
        if (parseInt(appendixNumber) >= 1 && parseInt(appendixNumber) <= 38) { 
            return NextResponse.redirect(new URL(`https://docs.wikisubmission.org/library/books/quran-the-final-testament-appendix-${appendixNumber}`, ))
        } else { 
            return NextResponse.redirect(new URL(`https://docs.wikisubmission.org/library/books/quran-the-final-testament-appendices`))
        }
    }

    if (request.nextUrl.pathname === '/appendices') { 
        return NextResponse.redirect(new URL(`https://docs.wikisubmission.org/library/books/quran-the-final-testament-appendices`))
    }

    return locales(request)
}